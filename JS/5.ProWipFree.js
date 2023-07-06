const userSubscription = "free";
if (userSubscription === "pro" || userSubscription === "vip" || userSubscription === "free") {
  console.log("Доступ разрешен. Пользователь имеет подписку pro, vip или free.");
} else {
  console.log("Доступ запрещен. Пользователь имеет другой тип подписки или не имеет подписки вообще.");
}