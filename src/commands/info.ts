export default function commandInfo(channel) {
  const message = `Список доступных команд:
	• sun play 'despacito'/link — заказать трек
	• sun stop — остановить трек
	• sun queue — получить список треков в очереди`;

  channel.send(message.replace(/\t/g, ""));
}
