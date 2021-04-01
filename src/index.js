import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Data
const data = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller"
  }
];

const colors = ['blue', 'red', 'green', 'purple', 'orange', 'aqua', 'gold', 'pink', 'violet'];

//React
class Quoted extends React.Component {
  constructor(props) {
    super(props);
    this.state = data[Math.floor(Math.random() * data.length)];
    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote() {
    this.setState((state) => data[Math.floor(Math.random() * data.length)]);
    console.log('hello ' + this.state.author);
  }

  render() {

    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div id='wrapper' style={{backgroundColor: color}}>
        <div id='quote-box'>
          <h2 id='text' style={{color: color}}><i>❝  </i>{this.state.quote}<i>  ❞</i></h2>
          <h4 id='author' style={{color: color}}>- {this.state.author}</h4>
          <div>
            <a id='tweet-quote' href='https://twitter.com/intent/tweet' style={{backgroundColor: color}}><img src='twitter.png' alt='share quote' /></a>
            <button id='new-quote' onClick={this.nextQuote} style={{backgroundColor: color}}>New quote</button>
          </div>
        </div>
        <p>By Zarrouki Soufiane</p>
      </div>
    );
  }

}

ReactDOM.render(
  <Quoted />,
  document.getElementById('root')
);


