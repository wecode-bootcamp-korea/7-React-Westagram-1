import React, { useState } from 'react';

import { FOOTER_LIST } from './MainData';
import Nav from '../../../components/Nav/Nav';
import Comment from '../Comment/CommentBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

import './Main.scss';

const Main = () => {
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = e => {
    e.preventDefault();
    if (newComment.trim() === '') {
      return;
    }

    setCommentList([...commentList, newComment]);
    setNewComment('');
  };

  const newCommentInput = event => setNewComment(event.target.value);

  return (
    <div className="Main">
      <Nav />
      <main>
        <div className="containar">
          <section className="feeds">
            <article>
              <div className="feedsMenu">
                <div className="user">
                  <div className="userImg" />
                  <div className="userId">navi</div>
                </div>
                <FontAwesomeIcon icon={faEllipsis} className="more" />
              </div>

              <div className="feedMainContents">
                <div className="feedImg">
                  <img src="./images/jiniChoi/feed1.png" alt="" />
                </div>

                <div className="feedUtilMenu">
                  <div className="left">
                    <FontAwesomeIcon icon={faHeart} className="UtilMenuLike" />
                    <FontAwesomeIcon
                      icon={faComment}
                      className="UtilMenuComment"
                    />
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="UtilMenuShare"
                    />
                  </div>
                  <div className="right">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="UtilMenuBookmark"
                    />
                  </div>
                </div>

                <div className="feedLikes">
                  <div className="feedLikesImg" />
                  <div className="feedLikesText">
                    <span>sagong</span>님 외 <span>10명</span>이 좋아합니다.
                  </div>
                </div>

                <div className="commentsBox">
                  <ul>
                    {commentList.map((newComment, index) => (
                      <Comment newComment={newComment} key={index} />
                    ))}
                  </ul>
                </div>

                <form className="commentPost" onSubmit={handleCommentSubmit}>
                  <input
                    required
                    type="text"
                    placeholder="댓글 달기..."
                    className="inputText"
                    value={newComment}
                    onChange={newCommentInput}
                  />
                  <button type="submit" className="submitBtn">
                    게시
                  </button>
                </form>
              </div>
            </article>
          </section>

          <aside className="mainRight">
            <div className="myProfil">
              <div className="myProfilImg" />
              <div className="myProfilText">
                <div className="myProfilId">genie</div>
                <div className="myProfilName">WeCode | 위코드</div>
              </div>
            </div>

            <div className="story">
              <div className="title">
                <h3>스토리</h3>
                <span className="more">모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>

                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="gradient">
                    <div className="followProfilImg" />
                  </div>
                  <div className="followProfilText">
                    <div className="followProfilId">bikibikye</div>
                    <div className="followAccessTime">16분전</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="recommendation">
              <div className="title">
                <h3>회원님을 위한 추천</h3>
                <span className="more">모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="recommendationImg" />
                  <div className="recommendationText">
                    <div className="recommendationId">jieunnnn</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendationImg" />
                  <div className="recommendationText">
                    <div className="recommendationId">gongjooim</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
                <li>
                  <div className="recommendationImg" />
                  <div className="recommendationText">
                    <div className="recommendationId">jungminimanimo</div>
                    <div className="recommendationFollow">
                      dainzzl님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                  <button type="submit" className="followBtn">
                    팔로우
                  </button>
                </li>
              </ul>
            </div>

            <footer>
              <p>
                {FOOTER_LIST.map(info => (
                  <span key={info.id}>{info.text}</span>
                ))}
              </p>
              <span>© 2023 WESTAGRAM</span>
            </footer>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Main;
