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
    this.setState({
      channelName: ''
    });
    this.props.addChannel(channelName);
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
  constructor(props){
    super(props);
    this.state = {
      channels: [
        {name: 'Hardware Support'},
        {name: 'Software Support'}
      ]
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({name: name});
    this.setState({
      channels: channels
    });
  }
  render(){
    return(
      <div>
        <ChannelList channels={this.state.channels} />
        <ChannelForm addChannel={this.addChannel.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<ChannelSection />,
  document.getElementById("app"));
