import { Grid, Typography } from "@material-ui/core";
import Score from "./Score";
import Bullet from "./Bullet";

export default function Metric(props) {
  const { score, label1, label2, bullets } = props;
  const styles = {};

  return (
    <Grid container style={{ flex: 1 }}>
      <Score score={score} label1={label1} label2={label2} />
      {bullets.map((bullet) => (
        <Bullet text={bullet} />
      ))}
    </Grid>
  );
}
