const date = new Date();

export default function log(message: string): void {
  console.log(
    `[Sunbot] ${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} — ${message}`,
  );
}
