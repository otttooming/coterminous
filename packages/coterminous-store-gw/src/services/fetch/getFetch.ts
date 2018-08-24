interface Props {
  url: string;
  options?: Options;
}

interface Response {
  payload: any;
  meta: any;
}

interface Options {
  type: FETCH_TYPE;
}

export enum FETCH_TYPE {
  JSON = "JSON",
  TEXT = "TEXT",
}

export async function getFetch({ url, options }: Props): Promise<Response> {
  try {
    const response = await fetch(url);
    const payload =
      options && options.type && options.type === FETCH_TYPE.TEXT
        ? await response.text()
        : await response.json();

    const headers = response.headers;

    const totalPages = parseInt(headers.get("X-WP-TotalPages"), 10);

    const meta = { totalPages };

    const data = { payload, meta };

    return data;
  } catch (error) {
    return null;
  }
}
