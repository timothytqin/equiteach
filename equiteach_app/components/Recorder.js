import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import AWS from "aws-sdk";
import { RNS3 } from "react-native-upload-aws-s3";
import CustomButton from "./CustomButton";

export default function Recorder({ style }) {
	const [recording, setRecording] = React.useState(false);

	async function startRecording() {
		console.log("hey");
		try {
			console.log("Requesting permissions..");
			await Audio.requestPermissionsAsync();
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});
			console.log("Starting recording..");
			const { recording } = await Audio.Recording.createAsync({
				android: {
					extension: ".amr",
					outputFormat: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
					audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
					sampleRate: 44100,
					numberOfChannels: 2,
					bitRate: 128000,
				},
				ios: {
					extension: ".mp4",
					outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
					audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
					sampleRate: 44100,
					numberOfChannels: 2,
					bitRate: 128000,
					linearPCMBitDepth: 16,
					linearPCMIsBigEndian: false,
					linearPCMIsFloat: false,
				},
			});
			setRecording(recording);
			console.log("Recording started");
		} catch (err) {
			console.error("Failed to start recording", err);
		}
	}

	async function stopRecording() {
		console.log("Stopping recording..");
		setRecording(undefined);
		await recording.stopAndUnloadAsync();
		const uri = recording.getURI();
		console.log("Recording stopped and stored at", uri);

		console.log("uploadign");
		// const params = { Bucket: "equiteach", Key: "test.mp4", Body: uri };
		// AWS.config.update({
		//   accessKeyId: "AKIATWJ3NAZ7UTZOBQHN",
		//   secretAccessKey: "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",
		//   region: "global",
		// });
		// const s3 = new AWS.S3();
		// // s3.upload(params, (err) => console.log(err));
		// await uploadAudioAsync(uri);
		const file = {
			// `uri` can also be a file system path (i.e. file://)
			uri: uri,
			name: "test.amr",
			type: "audio/aiff",
		};

		const options = {
			keyPrefix: "uploads/",
			bucket: "equiteach",
			region: "us-east-2",
			accessKey: "AKIATWJ3NAZ7UTZOBQHN",
			secretKey: "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",
			successActionStatus: 201,
		};

		try {
			const response = await RNS3.put(file, options);
			if (response.status === 201) {
				console.log("Success: ", response.body);
				/**
				 * {
				 *   postResponse: {
				 *     bucket: "your-bucket",
				 *     etag : "9f620878e06d28774406017480a59fd4",
				 *     key: "uploads/image.png",
				 *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
				 *   }
				 * }
				 */
			} else {
				console.log("Failed to upload image to S3: ", response);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<CustomButton
			text={recording ? "Stop Recording" : "Start Recording"}
			onPress={recording ? stopRecording : startRecording}
			inverted
			buttonStyle={{
				backgroundColor: recording ? "#f00" : "#32c21f",
				...style,
				borderWidth: 0,
			}}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
		padding: 10,
	},
});
