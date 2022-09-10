export interface OptionSorderType {
    chart: {
        id: string,
        fontFamily: string,
      },
      dataLabels: {
        enabled: boolean,
      },
      grid: {
        padding: {
          left: number,
          right: number,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: string,
            labels: {
              show: boolean,
              total: {
                show: boolean,
                label: string,
                color: string,
              },
            },
          },
        },
      },
      stroke: {
        width: number,
      },
      labels: string[],
      legend: {
        show: boolean,
      },
      colors: string[],
      tooltip: {
        fillSeriesColor: boolean,
      },
}