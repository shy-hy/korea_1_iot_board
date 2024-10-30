import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BookFilter.css'; // CSS 파일을 사용하여 UI 스타일링 추가

const DOMAIN = 'http://localhost:8080';
const BOOK_API = 'api/books';

interface GetBookResponseDto {
  title: string;
  author: string;
  publicationYear: number;
  category: string;
}

export default function BookFilter() {
  const [query, setQuery] = useState<string>(''); // 도서 제목 입력 상태
  const [results, setResults] = useState<GetBookResponseDto[]>([]);
  const [modalBook, setModalBook] = useState<GetBookResponseDto | null>(null); // 모달에 표시할 도서 상태

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchBookData = async () => {
    if (query.trim()) {
      try {
        const response = await axios.get(`http://localhost:8080/api/books/search`); // 제목으로 검색
        const data = response.data;
        setResults(data);
      } catch (error) {
        console.error("데이터 가져오기 오류: ", error);
      }
    }
  };

  const handleSearchClick = () => {
    fetchBookData();
  };

  const handleDetailClick = (book: GetBookResponseDto) => {
    setModalBook(book); // 모달에 도서 정보를 설정
  };

  const closeModal = () => {
    setModalBook(null); // 모달 닫기
  };

  return (
    <div className="book-filter">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder='도서 제목 입력'
        required
      />
      <button onClick={handleSearchClick}>검색</button>

      <ul>
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index} className="book-item">
              <strong>제목:</strong> {result.title} <br />
              <strong>저자:</strong> {result.author} <br />
              <strong>출판 연도:</strong> {result.publicationYear} <br />
              <strong>카테고리:</strong> {result.category} <br />
              <button onClick={() => handleDetailClick(result)}>상세 보기</button>
            </li>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p> // 검색 결과가 없을 경우 메시지
        )}
      </ul>

      {modalBook && ( // 모달 표시
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>도서 상세 정보</h2>
            <p><strong>제목:</strong> {modalBook.title}</p>
            <p><strong>저자:</strong> {modalBook.author}</p>
            <p><strong>출판 연도:</strong> {modalBook.publicationYear}</p>
            <p><strong>카테고리:</strong> {modalBook.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
