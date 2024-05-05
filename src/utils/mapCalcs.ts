export const calculateETA = (stopIndex: number, stops: string | any[]) => {
  if (stopIndex <= 0 || stopIndex >= stops.length) {
    return 0;
  }

  const avgSpeed = 45;
  const distance = calculateDistance(stops[stopIndex - 1], stops[stopIndex]);
  const timeInHours = distance / avgSpeed;
  const timeInMinutes = timeInHours * 60;
  return Math.round(timeInMinutes);
};

export const calculateDistance = (
  point1: { lat: number; lng: number },
  point2: { lat: number; lng: number },
) => {
  if (!point1 || !point2) {
    return 0;
  }

  const lat1 = point1.lat || 0;
  const lon1 = point1.lng || 0;
  const lat2 = point2.lat || 0;
  const lon2 = point2.lng || 0;
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  return Math.round(d);
};
