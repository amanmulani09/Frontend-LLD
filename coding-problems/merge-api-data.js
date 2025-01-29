// console.log(undefined || 5 && 9 || 2);

const mockApiOneData = {
  data: [
    {
      name: "john",
      marks: "89%",
      id: 1234,
    },
    {
      name: "joe",
      marks: "80%",
      id: 1235,
    },
  ],
};

const mockApiTwoData = {
  data: [
    {
      name: "john",
      marks: "89%",
      id: 1234,
    },
    {
      name: "marry",
      marks: "30%",
      id: 1236,
    },
  ],
};

const mockApi1 = Promise.resolve(mockApiOneData);
const mockApi2 = Promise.resolve(mockApiTwoData);

const mergeAPIData = async () => {
  const [mockApi1Resp, mockApi2Resp] = await Promise.all([mockApi1, mockApi2]);

  const DataSet1 = new Set(
    mockApi1Resp.data.map((item) => JSON.stringify(item))
  );
  const DataSet2 = new Set(
    mockApi2Resp.data.map((item) => JSON.stringify(item))
  );

  const mergedData = [
    ...mockApi1Resp.data.filter((data) => !DataSet2.has(JSON.stringify(data))),
    ...mockApi2Resp.data.filter((data) => !DataSet1.has(JSON.stringify(data))),
  ];
  console.log(mergedData);
};

mergeAPIData();
