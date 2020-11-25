import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } 
    catch (error) {
      console.log(error);
    }
  };

  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const addComment = (id, comment) => async (dispatch) => {
    try {
      const { data } = await api.addComment(id, comment);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const addAnswer = (id, answer) => async (dispatch) => {
    try {
      const { data } = await api.addAnswer(id, answer);
  
      dispatch({ type: 'ADD_ANSWER', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////             /////////////////////////////////////////
/////////////////////////////////////    TA       /////////////////////////////////////////
/////////////////////////////////////             /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

  // export const doubtsAsked = (id) => async (dispatch) => {
  //   try {
  //     const { data } = await api.doubtsAsked(id);
  
  //     dispatch({ type: 'DOUBTS_ASKED', payload: data });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  export const getTaData = () => async (dispatch) => {
    try {
      const { data } = await api.fetchTaData();
  
      dispatch({ type: 'FETCH_ALL_TA', payload: data });
    } 
    catch (error) {
      console.log(error);
    }
  };
  
  export const createTaData = (post) => async (dispatch) => {
    try {
      const { data } = await api.createTaData(post);
  
      dispatch({ type: 'CREATE_TA', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const addAcceptedDoubts = (id) => async (dispatch) => {
    try {
      const { data } = await api.addAcceptedDoubts(id);
  
      dispatch({ type: 'ADD_ACCEPTED_DOUBTS', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const addEscalatedDoubts = (id) => async (dispatch) => {
    try {
      const { data } = await api.addEscalatedDoubts(id);
  
      dispatch({ type: 'ADD_ESCALATED_DOUBTS', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const addResolvedDoubts = (id) => async (dispatch) => {
    try {
      const { data } = await api.addResolvedDoubts(id);
  
      dispatch({ type: 'ADD_RESOLVED_DOUBTS', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };