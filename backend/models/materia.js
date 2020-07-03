import mongoose,{Schema} from 'mongoose';

const materiaSchema = new Schema({
    nombre:{type:String, maxlength:50, required:[true,'Nombre obligatorio']},
    descripcion:{type:String, maxlength:50},
    activo:{type: Boolean, default:true},
    createdAt:{type:Date, default:Date.now}
    
});

const Materia= mongoose.model('materia',materiaSchema);

export default Materia;