import { Grid, Typography } from "@material-ui/core";
import { formatDonationAmount } from "../lib/lib";

import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";

export default function DonationItem(props) {
  const { rank, ticker, data } = props;
  const styles = {
    background: {
      // backgroundColor: rank % 2 == 1 ? "#F3F3F3" : "#FFF",
      backgroundColor: "#FFF",
      //   width: window.innerWidth * 0.1,
      padding: 10,
      //   borderBottom: "1px solid #D5D5D5",
    },
    rankContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    tickerContainer: {
      flex: 3,
      alignItems: "center",
    },
    amountContainer: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: PRIMARY_COLOR,
      borderRadius: 10,
      color: "white",
    },
    rank: { fontSize: 22, fontWeight: 500, color: "#888" },
    ticker: { fontSize: 18 },
    amount: { fontSize: 18 },
  };

  return (
    <Grid container item style={styles.background}>
      <Grid container style={styles.rankContainer}>
        <Typography
          style={{
            ...TYPOGRAPHY,
            ...styles.rank,
          }}
        >
          {rank}
        </Typography>
      </Grid>
      <Grid container style={styles.tickerContainer}>
        <Typography
          style={{
            ...TYPOGRAPHY,
            ...styles.ticker,
          }}
        >
          {ticker}
        </Typography>
      </Grid>
      <Grid container style={styles.amountContainer}>
        {data[ticker] && data[ticker].donation && (
          <Typography
            style={{
              ...TYPOGRAPHY,
              ...styles.amount,
            }}
          >
            ${formatDonationAmount(`${data[ticker].donation}`)}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
