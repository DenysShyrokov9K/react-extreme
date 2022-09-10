//FeedsType
export interface FeedDataType {
    title: string,
    icon: string,
    color: string,
    date: string,
    id: number,
}
//ProjectTable
export interface TableDataType {
    avatar: any,
    name: string,
    email: string,
    project: string,
    status: string,
    weeks: string,
    budget: string,
}

//SalesChart
export interface ChartOptionsType {
    series: [
        {
          name: string,
          data: number[],
        },
        {
          name: string,
          data: number[],
        },
      ],
      options: {
        chart: {
          type: string,
          fontFamily: string,
        },
        dataLabels: {
          enabled: boolean,
        },
        grid: {
          strokeDashArray:number,
        },
  
        stroke: {
          curve: string,
          width: number,
        },
        xaxis: {
          categories: string[],
        },
        tooltip: {
            theme: string
        }
      }
}
