let channels = [
  {name: 'Hardware Support'},
  {name: 'Software Support'}
];

class Channel extends React.Component {
  onClick(){
    console.log("clicked ->", this.props.name);
  }
  render(){
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}

class ChannelList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.channels.map( channel => {
          return (
            <Channel name={channel.name} />
          )
        }
        )}
      </ul>
    )
  }
}

// Render a form with a text input
class ChannelForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  onChange(event){
    // console.log(event.target.value);
    this.setState({
      channelName: event.target.value
    });
  }
  onSubmit(event){
    let {channelName} = this.state;
    console.log(channelName);
    channels.push({
      name: channelName
    });
    this.setState({
      channelName: ''
    });

    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text"
          onChange={this.onChange.bind(this)}
          value={this.state.channelName}
        />
      </form>
    )
  }
}

class ChannelSection extends React.Component{
  render(){
    return(
      <div>
        <ChannelList channels={channels} />
        <ChannelForm />
      </div>
    )
  }
}

ReactDOM.render(<ChannelSection />,
  document.getElementById("app"));
