export interface OptionType {
    maintainAspectRatio: boolean;
    legend: {
      display: boolean,
      labels: {
        fontFamily: string,
        fontColor: string,
      };
    }
  }

export const options1 : OptionType = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      labels: {
        fontFamily: 'Nunito Sans, sans-sarif',
        fontColor: '#8898aa',
      },
    },
  }