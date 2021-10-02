import pandas as pd
import sys
import os
from random import randrange



tickers = {
  'AAL': ("American Airline Group, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'AAPL': ("Apple Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'ADDYY': ("adidas AG", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'AMD': ("Advanced Micro Devices, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'AMZN': ("Amazon.com, Inc.", randrange(80, 100), randrange(80, 100), randrange(80, 100)),
  'COF': ("Capital One Financial Corporation", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'DELL': ("Dell Technologies, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'DIS': ("The Walt Disney Company", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'FB': ("Facebook, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'GOOG': ("Alphabet, Inc..", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'GS': ("The Goldman Sachs Group, Inc.", randrange(80, 100), randrange(80, 100), randrange(80, 100)),
  'HPQ': ("HP, Inc..", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'JPM': ("JPMorgan Chase & Co.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'KO': ("The Coca-Cola Company", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'MCD': ("McDonald's Corporation", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'MTCH': ("Match Group, Inc.", randrange(60, 100), randrange(60, 100), randrange(60, 100)),
  'NFLX': ("Netflix, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'NKE': ("NIKE, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'NVDA': ("NVIDIA Corporation", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'PEP': ("PepsiCo, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'SBUX': ("Starbucks Corporatio", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'SONY': ("Sony Group Corporation", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'TSLA': ("Tesla, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'UAVS': ("AeEagle Aerial Systems, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'UBER': ("Uber Technologies, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'WBA': ("Walgreens Boots Alliance, Inc.", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
  'WMT': ("Walmart, Inc..", randrange(40, 100), randrange(40, 100), randrange(40, 100)),
}

def main():
    json = "{\"Tutor\": ["
    j = 0
    directory = "./stocks"
    directories = os.listdir(directory)
    for filename in directories:
        ticker = filename.split(".")[0]
        path = os.path.join(directory, filename)

        df = pd.read_csv(path)

        time_data = df[['Date', 'Close']]

        json += """{
            "PutRequest": {
                "Item": {
                    "PK": {
                        "S": "Company" """

        json += """
                    },
                    "SK": {
                        "S": """
        json += f"\"{ticker}\""
        json += """
                    },
                    "name": {
                        "S": """
        json += f"\"{tickers[ticker][0]}\""
        json += """
                    },
                    "e_score": {
                        "N": """
        json += f"\"{tickers[ticker][1]}\""
        json += """
                    },
                    "s_score": {
                        "N": """
        json += f"\"{tickers[ticker][2]}\""
        json += """
                    },
                    "g_score": {
                        "N": """
        json += f"\"{tickers[ticker][3]}\""
        json += """
                    },
                    "stocks": {
                        "M": {"""
        
        for i in range(len(time_data)):
          date, close = time_data.iloc[i]
          json += f"\"{date}\""
          json += """:{\"N\": """
          json += f"\"{close}\""
          json += "}"
          if i != len(time_data) - 1:
            json += ","                  
        json += """
                        }
                    }
                }
            }
        }"""
        if j != len(directories) - 1:
            json += ","        
        j += 1

    json += "]}"
    print(json)

if __name__ == "__main__":
    main()
    # print([ i for i in tickers])
        