import request from "request";

const requestToken = async () => {
  try {
    var options = {
      method: "POST",
      url: "https://api.netless.link/v5/rooms",
      headers: {
        token:
          "NETLESSSDK_YWs9cnV0U2ZaZWpfeFk3bXloViZub25jZT01ZTNjZjU4MC1mMjBlLTExZWMtYTM2NC1kMTU0ZjI4OTAzZTUmcm9sZT0wJnNpZz00NDgyMmY2NmZkZDhkODcyNjAyZjY0NzIyM2QxYmQ5NzEzMmMwZGZhNjVhNzJkY2I2ZWFmMmFlMmM5ODUyMWY0",
        "Content-Type": "application/json",
        region: "us-sv",
      },
      body: JSON.stringify({
        isRecord: false,
      }),
    };

    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      return response.body;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getWhiteboardRoom = async (req, res) => {
  try {
    // var options = {
    //   method: "POST",
    //   url: "https://api.netless.link/v5/rooms",
    //   headers: {
    //     token:
    //       "NETLESSSDK_YWs9cnV0U2ZaZWpfeFk3bXloViZub25jZT01ZTNjZjU4MC1mMjBlLTExZWMtYTM2NC1kMTU0ZjI4OTAzZTUmcm9sZT0wJnNpZz00NDgyMmY2NmZkZDhkODcyNjAyZjY0NzIyM2QxYmQ5NzEzMmMwZGZhNjVhNzJkY2I2ZWFmMmFlMmM5ODUyMWY0",
    //     "Content-Type": "application/json",
    //     region: "in-mum",
    //   },
    //   body: JSON.stringify({
    //     isRecord: false,
    //   }),
    // };

    // request(options, function (error, response) {
    //   if (error) throw new Error(error);
    //   console.log(response.body);
    //   return res.send(response.body);
    // });

    var options = {
      method: "POST",
      // Replace <Room UUID> with the uuid of your room
      url: "https://api.netless.link/v5/tokens/rooms/3bd0b000f23a11ecbe819dcf06d6c52b",
      headers: {
        token:
          "NETLESSSDK_YWs9cnV0U2ZaZWpfeFk3bXloViZub25jZT01ZTNjZjU4MC1mMjBlLTExZWMtYTM2NC1kMTU0ZjI4OTAzZTUmcm9sZT0wJnNpZz00NDgyMmY2NmZkZDhkODcyNjAyZjY0NzIyM2QxYmQ5NzEzMmMwZGZhNjVhNzJkY2I2ZWFmMmFlMmM5ODUyMWY0",
        "Content-Type": "application/json",
        region: "in-mum",
      },
      body: JSON.stringify({ lifespan: 100 * 60 * 60 * 24, role: "admin" }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      return res.send(response.body);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export { getWhiteboardRoom };
