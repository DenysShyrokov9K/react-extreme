//CryptoChart Type
export interface OptionScrypToChartsType {
    chart: {
        id: string,
        fontFamily: string,
        type: string,
        toolbar: {
          show: boolean,
        },
      },
  
      dataLabels: {
        enabled: boolean,
      },
      stroke: {
        curve: string,
        width: number,
      },
      fill: {
        type: string,
        opacity: number[],
      },
      colors: string[],
      legend: {
        show: boolean,
      },
      markers: {
        size: number,
      },
      xaxis: {
        categories: number[],
        labels: {
          show: boolean,
          style: {
            colors: string,
            fontSize: string,
            fontFamily: string,
          },
        },
      },
      yaxis: {
        labels: {
          show: boolean,
          style: {
            colors: string,
            fontSize: string,
            fontFamily: string,
          },
        },
      },
      grid: {
        borderColor: string,
        xaxis: {
          lines: {
            show: boolean,
          },
        },
        yaxis: {
          lines: {
            show: boolean,
          },
        },
      },
      tooltip: {
        theme: string,
      },
}

//CryptoTable Type
export interface CryptoDataType {
  logo: any,
  Currency: string,
  short: string,
  Price: string,
  MarketCap: string,
  Volume: string,
  Change1d: string,
  Change1w: string,
}