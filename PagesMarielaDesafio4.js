const fs = require('fs')


//creo la clase con sus metodos 
class Contenedor{
    constructor(archivo){
        this.file = archivo  // el archivo comienza siendo un array vacio que incorporara a todos los objetos luego guardados
    }
    async save(object){
        try{
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            let posteriorId = 0;
            if(arrayProductos.legth === 0){
                posteriorId = 1
            }
            else{
                let ultimoId=0
                arrayProductos.forEach(element => {
                    ultimoId=element.id
                });
                posteriorId = ultimoId + 1
            }
            let objeto = {
                id : posteriorId,
                title : object.title,
                price : object.price,
                thumbnail : object.thumbnail
            }
            arrayProductos.push(objeto);
            await fs.promises.writeFile(`./${this.file}`, `${JSON.stringify(arrayProductos)}`);
            console.log(`el id del ultimo objeto guardado es ${posteriorId}`);
        }
        catch(err){
            console.log("save error",err)
        }
    }
    async getById(id){
        try{
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            const productoEncontrado = arrayProductos.find((producto) => producto.id === id);
            if (productoEncontrado === undefined){
                console.log(null) // pongo console.log porque si pongo return, despues no lo puedo guardar y recuperar en ninguna variable porque es asincronica la funcion
            }
            else{
                console.log(productoEncontrado)
            }
        }
        catch(err){
            console.log("getById error",err);
        }
    }
    async getAll(){
        try{
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            console.log(arrayProductos);
        }
        catch(err){
            console.log("getAll error",err);
        }
    }
    async deleteById(id){
        try{
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const arrayProductos = JSON.parse(contenido);
            const productoEncontrado = arrayProductos.find((producto) => producto.id === id);
            if(productoEncontrado){
                const arrayMenosProducto = arrayProductos.filter((producto) => producto.id !== id);
                await fs.promises.writeFile(`./${this.file}`, `${JSON.stringify(arrayMenosProducto)}`);
                console.log(`el producto fue eliminado existosamente`)
            } else{
                console.log(`no habia producto para eliminar`)
            }
        }
        catch(err){
            console.log("deleteById error",err);
        }
    }
    async deleteAll(){
        try{
            const arrayEliminarTodo = [];
            await fs.promises.writeFile(`./${this.file}`, `${JSON.stringify(arrayEliminarTodo)}`);
            console.log(`objetos eliminados exitosamente`)
        }
        catch(err){
            console.log('deleteAll error', err)
        }
    }
}

module.exports = Contenedor 