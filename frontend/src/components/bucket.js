import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as NoteActions from "../redux/actions/note-actions";
import { Button, Input, message, Space, Table, Tag } from 'antd';
import { Layout } from 'antd';
import { Component } from "react";
const { Header,  Sider, Content } = Layout;


class Bucket extends Component {
  constructor(props) {
    super(props);
    this.state={
      bucket_name:"",
      add: true,
      id:0
    }
    this.bucketChange = this.bucketChange.bind(this);
    this.addBucket = this.addBucket.bind(this);
    this.addnote = this.addnote.bind(this);
    this.updateBucket = this.updateBucket.bind(this);
    
    
  }
 async componentDidMount(){
    await this.props.get_bucket()
  
  }
  bucketChange(e){
    this.setState({bucket_name:e.target.value})
  }
  addnote(e){
    this.props.history.push('/note/'+e.id+ '/add-note')
  }
  EditBucket(e){
    this.setState({bucket_name:e.name, add : false,id:e.id})

  }
  async addBucket(){
   await this.props.add_bucket({name: this.state.bucket_name});
    if (this.props.savebucketmessage ==='Bucket Added Successfully '){
      this.setState({bucket_name:''})
      this.props.get_bucket()
      message.success(this.props.savebucketmessage)
    }
  }
  async updateBucket(){
    await this.props.update_bucket(this.state.id, {name: this.state.bucket_name});
     if (this.props.updateBucketMessage ==='Bucket updated Successfully '){
       this.setState({bucket_name:''})
       message.success(this.props.updateBucketMessage)
       this.props.get_bucket()
     }
   }
  
  

  render(){
    const columns = [
      { title: 'Bucket Name', dataIndex: 'name', key: 'id' ,value :"name"},
      { title: 'Created At', dataIndex: 'created_date', key: 'created_date' , value : "created_date"},
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record) => <a onClick = {()=>this.EditBucket(record)}>Edit</a>,
      },{
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record) => <a onClick = {()=>this.addnote(record)}>Add Note</a>,
      },
      
    ];
    return(
      <div>
      
    <div >
      
    <span style={{textAlign:'start'}}>Add Bucket</span>
    <Layout style={{width:'90%',marginLeft:"4%",marginBottom:"20px", padding:"10px"}}>
      <Layout>
        <Content> <Input
      placeholder="Enter bucket name"
      enterButton="Search"
      value = {this.state.bucket_name}
      onChange={this.bucketChange}
      size="large"
    /></Content>
        <Sider>
          {this.state.add ? 
          <Button onClick={this.addBucket} style={{width:'100%' , height:'100%', background:"#000", color:"#FFF"}}>Add</Button>
          :<Button onClick={this.updateBucket} style={{width:'100%' , height:'100%', background:"#000", color:"#FFF"}}>Update</Button>
           } </Sider>
      </Layout>
    </Layout>
    </div>
    <Table
    columns={columns}
    
    dataSource={this.props.bucketlist}
  />
    </div>
    
    )
  }
  
}
Bucket.propTypes = {
    location: PropTypes.object,
    getAllDevices: PropTypes.func,
    savebucketmessage: PropTypes.string
  };
  function mapStateToProps(state) {
    return {
      ...state.note,
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...NoteActions,  }, dispatch);
  }
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(
        Bucket
    )
  );
  