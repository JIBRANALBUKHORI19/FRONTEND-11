import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const Apis = {
    getMahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    createMahasiswa: (data) => api.post('/mahasiswa', data),
    updateMahasiswa: (nim, data) => api.put(`/mahasiswa/${nim}`, data),
    deleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`)
}

export default Apis;
