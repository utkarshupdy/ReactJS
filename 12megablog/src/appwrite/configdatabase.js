import conf from "../config/config";
import {Client , ID , Databases , Storage , Query} from "appwrite"

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)

    }
    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug , 
                {
                    title ,
                    content ,
                    status,
                    featuredImage,
                    userId,


                }
            )  
        } catch (error) {
            console.log(" Appwrite serive :: createPost :: error" , error);   
        }
    }
    async updatePost({slug,title, content, featuredImage, status }){ // we dont need use id , as we dont want anyone to update user id
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error" , error);
            
        }

    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error" , error);
            return false;
            
        }

    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error" , error);
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status" , "active")]){ // queries is a variable , u can change this name 
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // [Query.equal("status" , "active")]  we can also write like this
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error" , error);
            return false;
        }
    }
    //file upload services
    async uploadFiles(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,

            )
            
        } catch (error) {
            console.log("Appwrite serive :: uploadFiles :: error" , error);
            return false;
            
            
        }
    }
    async deleteFiles(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite serive :: deleteFiles :: error" , error);
            return false;
            
        }
    }
    // preview file fxn does not return any promises , its response is already very fast nd return file id
    getfilePriview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }


}

const service = new Service();
export default service