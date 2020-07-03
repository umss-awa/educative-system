import models from '../models'
import { query } from 'express'
import { model } from 'mongoose'


export default{
    add: async (req, res, next)=>{
        try {
            const reg = await models.Materia.create(req.body)
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async (req, res, next)=>{
        try {
            const reg = await models.Materia.findOne({_id:req.query._id})
            if(!reg){
                res.status(404).send({
                    message:'El registro no existe'
                })
            }else{
                res.status(200).json(reg)
            }
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async (req, res, next)=>{
        try {
            const reg = await models.Materia.find({})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req, res, next)=>{
        try {
            const reg = await models.Materia.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre, descripcion:req.body.descripcion})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req, res, next)=>{
        try {
            const reg = await models.Materia.findByIdAndDelete({_id:req.body._id})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async (req, res, next)=>{
        try {
            const reg = await models.Materia.findByIdAndUpdate({_id:req.body._id},{activo:true})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    deactivate: async (req, res, next)=>{
        try {
            const reg = await models.Materia.findByIdAndUpdate({_id:req.body._id},{activo:false})
            res.status(200).json(reg) 
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
}