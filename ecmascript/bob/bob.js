export default class Bob {
  hey(message) {
    if(message.match(/\!/g)) {
      if(message === message.toUpperCase()) return 'Whoa, chill out!';
      return 'Whatever.'
    }
    if(message.match(/\?$/g)) {
      if(message.replace(' ', '').match(/^[0-9]+$/g) != null) return 'Sure.';
      if(message === message.toUpperCase()) return 'Whoa, chill out!';
      return 'Sure.';
    }
    return 'Whatever.';
  }
}
