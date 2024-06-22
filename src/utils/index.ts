export const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  let deviceType = 'Unknown';

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    deviceType = 'Tablet';
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent,
    )
  ) {
    deviceType = 'Mobile';
  } else {
    deviceType = 'Desktop';
  }

  return deviceType;
};
