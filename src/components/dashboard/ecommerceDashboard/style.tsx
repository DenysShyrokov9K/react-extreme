//Earnings Type
export interface OptionsEarningsType {
    chart: {
        id: string,
        fontFamily: string,
        type: string,
        toolbar: {
          show: boolean,
        },
        sparkline: { enabled: boolean },
      },
  
      dataLabels: {
        enabled: boolean,
      },
      stroke: {
        curve: string,
        width: number,
      },
      colors: string[],
      xaxis: {
        show: boolean,
        labels: {
          show: boolean,
        },
      },
      yaxis: {
        show: boolean,
      },
      markers: {
        size: number,
      },
      tooltip: {
        x: {
          format: string,
        },
        theme: string,
      },
      legend: {
        show: boolean,
      },
      grid: {
        show: boolean,
      },
}

//OrderStats Type
export interface OptionsOrderType {
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

//ProductSalesType
export interface OptionsProductSalesType {
  chart: {
    id: string,
    fontFamily: string,
    type: string,
    toolbar: {
      show: boolean,
    },
    stacked: boolean,
  },
  labels: string[],
  dataLabels: {
    enabled: boolean,
  },
  grid: {
    padding: {
      left: number,
      right: number,
    },
    borderColor: string,
  },
  tooltip: {
    shared: boolean,
    intersect: boolean,
    x: {
      show: boolean,
    },
    theme: string,
  },
  legend: {
    show: boolean,
  },
  colors: string[],
  plotOptions: {
    bar: {
      columnWidth: string,
    },
  },
  fill: {
    opacity: number,
  },
  stroke: {
    width: number,
  },
  xaxis: {
    categories: number[],
    labels: {
      show: boolean,
      style: {
        colors: string[],
        fontSize: string,
        fontFamily: string,
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: string[],
        fontSize: string,
        fontFamily: string,
      },
    },
  },
}

//ProductTableType
export interface TableDataType {
  pavatar: any,
    name: string,
    customer: string,
    status: string,
    weeks: string,
    budget: string,
}