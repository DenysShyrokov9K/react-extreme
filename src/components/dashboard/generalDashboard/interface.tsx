//MonthSummeryType
export interface OptionsCampaignOverviewType{
    chart: {
        id: string,
        type: string,
        fontFamily: string,
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
        labels: {
          show: boolean,
        },
      },
      yaxis: {
        labels: {
          show: boolean,
        },
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

//OrderStatus
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
      },
    },
  },
  labels: string[],
  stroke: {
    width: number,
  },
  legend: {
    show: boolean,
  },
  colors: string[],
  tooltip: {
    fillSeriesColor: boolean,
  },
}

//RevenuePageBounce
export interface OptionSrevenueType {
  chart: {
    id: string,
    fontFamily: string,
    type: string,
    toolbar: {
      show: boolean,
    },
    sparkline: { enabled: boolean },
  },
  colors: string[],
  plotOptions: {
    bar: {
      horizontal: boolean,
      endingShape: string,
      columnWidth: string,
    },
  },
  dataLabels: {
    enabled: boolean,
  },
  stroke: {
    show: boolean,
    width: number,
    colors: string[],
  },
  xaxis: {
    labels: {
      show: boolean,
    },
  },
  yaxis: {
    show: boolean,
  },
  grid: {
    show: boolean,
  },
  fill: {
    opacity: number,
  },

  tooltip: {
    theme: string,
  },
}

export interface SeriesRevenueType {
  name: string,
  data: number[],
}

export interface OptionsPageViewsType {
  chart: {
    id: string,
    type: string,
    toolbar: {
      show: boolean,
    },
    sparkline: { enabled: boolean },
  },
  colors: string[],
  dataLabels: {
    enabled: boolean,
  },
  stroke: {
    curve: string,
    width: number,
  },
  xaxis: {
    labels: {
      show: boolean,
    },
  },
  yaxis: {
    show: boolean
  },
  grid: {
    show: boolean
    padding: {
      left: number,
      right: number,
    },
  },

  tooltip: {
    theme: string,
  },
}

export interface SeriesPageViewsType {
  name: string,
  data: number[],
}

export interface OptionsbounceType {
  grid: {
    show: boolean,
    padding: {
      left: number,
      right: number,
    },
  },
  colors: string[],
  chart: {
    fontFamily: string,
    toolbar: {
      show: boolean,
    },
    sparkline: {
      enabled: boolean,
    },
  },
  dataLabels: {
    enabled: boolean,
  },
  fill: {
    type: string,
    opacity: number,
  },
  stroke: {
    curve: string,
    width: number,
  },
  markers: {
    size: number,
  },
  xaxis: {
    type: string,
    lines: {
      show: boolean,
    },
    axisBorder: {
      show: boolean,
    },
    labels: { show: boolean },
  },
  yaxis: [
    {
      y: number,
      offsetX: number,
      offsetY: number,
      padding: { left: number, right: number },
    },
  ],
  tooltip: {
    x: { show: boolean },
    theme: string,
  },
}

export interface SeriesBounceType {
  name: string,
  data: number[],
}

//SalesRatioType
export interface OptionsSalesRatioType {
  chart: {
    id: string,
    fontFamily: string,
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

export interface SeriesSalesRatioType {
  name: string,
  data: number[]
}

//TotalVisitsType
export interface OptionsVisitsType {
  chart: {
    id: string,
    fontFamily: string,
    type: string,
    toolbar: {
      show: boolean,
    },
    sparkline: { enabled: boolean },
  },
  colors: string[],
  plotOptions: {
    bar: {
      horizontal: boolean,
      endingShape: string,
      columnWidth: string,
    },
  },
  dataLabels: {
    enabled: boolean,
  },
  stroke: {
    show: boolean,
    width: number
    colors: string[],
  },
  xaxis: {
    labels: {
      show: boolean,
    },
  },
  yaxis: {
    show: boolean,
  },
  grid: {
    show: boolean,
  },
  fill: {
    opacity: number,
  },
  tooltip: {
    enabled: boolean,
    theme: string,
  },
}