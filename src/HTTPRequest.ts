export default class HTTPRequest {
  async fetchData(url: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Sample Data", url });
      }, 1000);
    });
  }
}
