import http from "../http-common";
import IBookData from "../types/book.type"

class BookDataService {
  getAll() {
    return http.get<Array<IBookData>>("/books");
  }

  get(id: string) {
    return http.get<IBookData>(`/books/${id}`);
  }

  create(data: IBookData) {
    return http.post<IBookData>("/books", data);
  }

  update(data: IBookData, id: any) {
    return http.put<any>(`/books/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/books/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/books`);
  }

  findByTitle(title: string) {
    return http.get<Array<IBookData>>(`/books?title=${title}`);
  }
}

export default new BookDataService();