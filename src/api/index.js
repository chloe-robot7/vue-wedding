import request from '../utils/request';
//婚恋平台
//查询分类
export const getClassData = query => {
    return request({
        url: '/classify',
        method: 'get',
        params: query
    });
};
//修改、增加分类
export const postClassData = query => {
    return request({
        url: '/classify',
        method: 'post',
        params: query
    });
};
//查询学堂内容
export const getContentData = query => {
    return request({
        url: '/contents',
        method: 'get',
        params: query
    });
};
//修改、增加学堂内容
export const postContentData = query => {
    return request({
        url: '/contents',
        method: 'post',
        params: query
    });
};
//查询活动内容
export const getActive = query => {
    return request({
        url: '/active',
        method: 'get',
        params: query
    });
};
//查询红娘
export const getMate = query => {
    return request({
        url: '/mate',
        method: 'get',
        params: query
    });
};
//查询全部用户详细信息
// export const getUserInfo = query => {
//     return request({
//         url: '/user',
//         method: 'get',
//         params: query
//     });
// };
// //查询用户择偶要求
// export const getMateInfo = query => {
//     return request({
//         url: '/user/mate',
//         method: 'get',
//         params: query
//     });
// };


export const fetchData = query => {
    return request({
        url: '/admin/login/selectGuest',
        method: 'get',
        params: query
    });
};

export const getWeddingData = query => {
    return request({
        url: '/admin/login/weddingInfo',
        method: 'get',
        params: query
    });
};

export const fetchBasicData = query => {
    return request({
        url: '/user/login/weddingInfo',
        method: 'post',
        params: query
    });
};


export const postData = form => {
    return request({
        url: '/user/addGuest',
        method: 'post',
        params: form
    });
};

export const updateInfo = form => {
    return request({
        url: '/user/login/updateInfo',
        method: 'post',
        params: form
    });
};

export const delData = id => {
    return request({
        url: '/guest/delete/${id}',
        method: 'post',
        params: id
    });
};

export const postRegister = form => {
    return request({
        url: '/user/register',
        method: 'post',
        params:{
            username: form.username,
            password: form.password,
        }
    });
}

export const fetchMedia = query => {
    return request({
        url: '/user/login/weddingInfo',
        method: 'get',
        params: query
    });
};



