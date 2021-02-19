import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as NoteActions from "../redux/actions/note-actions"
import {  Input, Button, Table, message } from 'antd';
import { Component } from "react";
import TextArea from "antd/lib/input/TextArea";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

class Note extends Component {
  constructor(props){
    super(props)
    this.state={
      note:'',
      add:true,
      id:0
    }
    this.addnote=this.addnote.bind(this);
    this.editNote= this.editNote.bind(this);
    this.updateNote= this.updateNote.bind(this);
    this.noteChange=this.noteChange.bind(this);
  }
  componentDidMount(){
     this.props.get_note(this.props.match.params.id);
  }
  editNote(record){
this.setState({add: false, note: record.name, id : record.id})
  }
 async updateNote(){
    await this.props.update_note(this.state.id , {name: this.state.note})
    this.props.get_note(this.props.match.params.id);
  this.setState({note:"", add:true})
  }
  async addnote(){
    let params = {
      name: this.state.note,
      bucket_id: this.props.match.params.id
    }
     await this.props.add_note(params);
     if (this.props.savenotemessage=== 'Note Added Successfully '){
      message.success(this.props.savenotemessage);
      this.props.get_note(this.props.match.params.id);
     }else{
      message.error(this.props.savenotemessage);

     }
  }
 
  noteChange(e){
    this.setState({note:e.target.value})
  }
  render(){
    const columns = [
      { title: 'Bucket Name', dataIndex: 'name', key: 'id' ,value :"name"},
      { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' , value : "createdAt"},
      {
        title: 'Action',
        dataIndex: '',
        key: 'id',
        render: (record) => <a onClick = {()=>this.editNote(record)}>Edit Note</a>,
      },
    ];
    return (
      <div >
        <p>Add / Update Note</p>
    <Layout style={{width:'90%',marginLeft:"4%",marginBottom:"20px", padding:"10px"}}>
      <Layout>
        <Content> <TextArea
      placeholder="Enter bucket name"
      enterButton="Search"
      value = {this.state.note}
      onChange={this.noteChange}
      size="large"
    /></Content>
        <Sider>
          {this.state.add? <Button  onClick={this.addnote} style={{width:'100%' , height:'100%', background:"#000", color:"#FFF"}}>Save Note</Button>:
          <Button  onClick={this.updateNote} style={{width:'100%' , height:'100%', background:"#000", color:"#FFF"}}>Update Note</Button>}
          
        </Sider>
      </Layout>
    </Layout>
        
        <Table
    columns={columns}
    
    dataSource={this.props.notelist}
  />
      </div>
    );
  }
 
}
Note.propTypes = {
    location: PropTypes.object,
    getAllDevices: PropTypes.func
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
      Note
    )
  );
  