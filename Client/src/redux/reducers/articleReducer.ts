import {GET_ARTICLE, UPDATE_ARTICLE, UPLOAD_ARTICLE_PICTURE, DELETE_ARTICLE} 
   from "../actions/article.action";
   
   const initialState:any = {}
   
   export const articleReducer = (state = initialState, action: any ) => {
       switch(action.type) {
           case GET_ARTICLE:
               return action.payload
           case UPDATE_ARTICLE:
               return state.map((article:any) => {
                   if (article.id === action.payload.articleId) {
                       return {
                           ...article,
                           name: action.payload.name,
                           productType: action.payload.productType,
                           price: action.payload.price
                       }
                   } else return article
               })
           case UPLOAD_ARTICLE_PICTURE:
               return state.map((article:any)=> {
                   if (article.id === action.payload.articleId) {
                       return {
                           picture: action.payload.picture
                       } 
                   } else return article
               })
           case DELETE_ARTICLE:
               return state.filter((article:any) => 
               article.id !== action.payload.articleId)
           
           default:
               return state          
       }
   }