import { shortfactAxios } from "../Connection/axios";

class Shortfact{

    sid = ""; title = ""; description = ""; content = ""; image = null; author = "";

    setShortfact(data){
        this.sid = data.sid;
        this.title = data.title;
        this.description = data.description;
        this.content = data.content;
        this.image = data.image;
        this.author = data.author;
    }

    getFactAsForm(){
        const FactData = new FormData();

        FactData.append("title", this.title);
        FactData.append("description", this.description);
        FactData.append("content", this.content);
        FactData.append("image", this.image);
        FactData.append("author", this.author);

        return FactData;
    }
}
class ShortfactAxios {

    createFact(shortfact) {
        return  shortfactAxios.post("create", shortfact, {
            headers: { "Content-Type": "multipart/form-data", },
        });
    }

    getAllFacts() {
        return shortfactAxios.get("getall");
    }

    getFactById(id){
        return shortfactAxios.get(`get/${id}`);
    }

    updateFact(id,shortfact){
        return shortfactAxios.put(`update/${id}`,shortfact);
    }

    deleteFact(id){
        return shortfactAxios.delete(`delete/${id}`);
    }
}

const ShortfactServices = new ShortfactAxios();
export {
    ShortfactServices,
    Shortfact
};