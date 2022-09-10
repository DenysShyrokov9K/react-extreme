//SalesOverView Type

export interface OptionsSaleSummaryType  {
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
      width: 2,
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
        show: true,
        style: {
          colors: string,
          fontSize: string,
          fontFamily: string
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
  };

export interface SeriesSalesSummryType {
    name: string,
    data: number[],
}

export interface StatesType {
  icon: string,
  title: string,
  earning: string,
  color: string,
}

//EmailCampaign Type
export interface OptionsVisitType {
  chart: {
    id: string,
    fontFamily: string,
  },
  dataLabels: {
    enabled: boolean
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

//statsType
export interface OptionsRevenueType {
  chart: {
    id: string,
    type: string,
    toolbar: {
      show: boolean,
    },
    sparkline: { enabled: boolean },
  },
  colors: [string],
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
    theme: 'dark',
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
    show: boolean,
  },
  grid: {
    show: false,
    padding: {
      left: number,
      right: number,
    },
  },

  tooltip: {
    theme: string,
  }
}

export interface SeriesPageBiewsType {
  name: string,
  data: number[];
}

export interface SeriesSalesSummryType {
    name: string,
    data: number[],
}

//ProjectTableType
export interface TableDataType {
  avatar: any,
  name: string,
  email: string
  project: string,
  status: string,
  weeks: string,
  budget: string
}

//RecentCommentsType
export interface CommentsDataType {
  image: any,
    name: string,
    comment: string,
    status: string,
    date: string,
}
