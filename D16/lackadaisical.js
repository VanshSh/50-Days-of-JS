// Bob answers 'Sure.' if you ask him a question, such as "How are you?".

// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.


console.log("DAY 16 - LACKADAISICAL");

function hey(message){
  // Bob's responses to yelling
  if (message.toUpperCase() === message && message.toUpperCase().indexOf('?') === -1) {
    return 'Whoa, chill out!';
  }
  // Bob's responses to questions
  if (message.toUpperCase().indexOf('?') !== -1) {
    return 'Sure.';
  }
  // Bob's responses to silence
  if (message.trim() === '') {
    return 'Fine. Be that way!';
  }
  // Bob's responses to anything else
  return 'Whatever.';

}