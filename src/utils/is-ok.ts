const isOk  = (statusCode:any) => {
  const status = Number.parseInt(statusCode, 10);
  return status < 400 && status > 99;
}

export default isOk;
