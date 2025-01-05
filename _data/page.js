module.exports = (data) => {
    if (data.page) {
      return data.page;
    }
    return {};
  };