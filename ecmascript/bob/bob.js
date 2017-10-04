export default class Bob {
  hey(message) {
    if(message.replace(/\ /g, '')) {
      if(message === message.toUpperCase() && message.match(/[a-z|A-Z]/g)) return 'Whoa, chill out!';
      return message.match(/\?$/g) ? 'Sure.' : 'Whatever.';
    } return 'Fine. Be that way!';
  }
}
