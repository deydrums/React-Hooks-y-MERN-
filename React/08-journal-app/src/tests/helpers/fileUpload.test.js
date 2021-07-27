import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";
jest.setTimeout(20000);
cloudinary.config({ 
    cloud_name: 'deydrums', 
    api_key: '938397662797245', 
    api_secret: 'brYMj1WJisngNKoL3d5Vd528_Wk'
  });

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el URL', async() => {
        const resp = await fetch('https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png');
        const blob = await resp.blob();
        const file = new File([blob],'foto.png');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        //Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.png','');
        const { deleted } = await cloudinary.v2.api.delete_resources(imageId);
        expect(deleted).toEqual({ [imageId]: "deleted" });
    });

    test('Debe de retornar un error', async() => {
        const file = new File([],'foto.jpg');
        const url = await fileUpload(file);
        expect( url).toBe(null);
    });
    
    
});



