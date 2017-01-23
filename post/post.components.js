(function() {
    'use strict';
    angular.module('app', ['angularMoment'])
        .component('posts', {
            templateUrl: 'post/posts.html',
            controller: controller
        })

    function controller() {

        let vm = this

        vm.upVote = function(currentPost) {
            currentPost.vote_count += 1
        }

        vm.downVote = function(currentPost) {
            if (currentPost.vote_count > 0) {
                currentPost.vote_count -= 1
            }
        }
        vm.makeComment = function(post, comment) {
            post.comments.push(comment)
        }
        vm.createPost = function() {
            vm.post.vote_count = 1
            vm.post.timeDisplay = new Date
            vm.post.comments = []
            vm.posts.push(vm.post)
            delete vm.post
        }
        vm.$onInit = function() {
            vm.selectBox = "-vote_count"
            vm.posts = [{
                    title: 'title post',
                    vote_count: 1,
                    body: 'this is a test post!',
                    author: 'luke',
                    comments: [],
                    timeDisplay: new Date(2017, 1, 2),
                    image_url: 'https://keepcupcnd.scdn4.secure.raxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/c/u/cup.jpg'
                },
                {
                    title: 'cool photo',
                    body: 'i like this mountain',
                    author: 'billy',
                    comments: [],
                    vote_count: 1,
                    timeDisplay: new Date(2017, 1, 3),
                    image_url: 'http://cdn.wallpapersafari.com/77/1/aik3fP.jpg'
                }
            ]
        }

    }


}());;
