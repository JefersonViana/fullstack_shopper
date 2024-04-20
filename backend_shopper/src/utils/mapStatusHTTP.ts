type Status = {
  [key: string]: number;
};

export default function mapStatusHTTP(status: string): number {
  const objStatus: Status = {
    "SUCCESSFUL": 200,
    "INVALID_DATA": 400,
    "NOT_FOUND": 404,
    "UNAUTHORIZED": 401,
  };
  return objStatus[status] || 500;
}
