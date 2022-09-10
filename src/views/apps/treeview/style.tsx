export interface treeDataType {
    key: string,
      label: string,
      nodes: [
        {
          key: string,
          label: string,
          nodes: [
            {
              key: string,
              label: string,
              nodes?: [],
              url: string,
            },
            {
              key: string,
              label: string,
              nodes?: [],
              url: string,
            },
            {
              key: string,
              label: string,
              nodes?: [],
              url: string,
            },
          ],
          url: string,
        },
      ],
      url: string,
}