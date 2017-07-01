<template>
  <div class="target-specification">
    <div class="people-target target">
      <h4>人才培养目标<Icon type="ios-compose"></Icon></h4>
      <Card style="width:320px">
        <div>
          <h3>一套基于 Vue.js 的高质量UI组件库</h3>
        </div>
      </Card>
    </div>
    <div class="grade-require target">
      <h4>毕业要求<Icon type="ios-compose"></Icon></h4>
      <div>
        <div>学分要求</div>
        <div>学分描述</div>
        <div>计算机能力</div>
        <div>外语能力</div>
        <div>基本职业资格证书</div>
        <div>提高职业资格证书</div>
      </div>
    </div>
    <div class="profession-target target">
      <h4>职业要求<Icon type="ios-compose"></Icon></h4>
      <div>
        <div>
          <Card style="width:350px">
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              经典电影
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              换一换
            </a>
            <ul>
              <li v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star"
                                                                               v-if="item.rate >= 9.5"></Icon><Icon
                  type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
              </li>
            </ul>
          </Card>
        </div>
        <div>
          <Card style="width:350px">
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>
              经典电影
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              换一换
            </a>
            <ul>
              <li v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star"
                                                                               v-if="item.rate >= 9.5"></Icon><Icon
                  type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
    <div class="word-target target">
      <h4>面向岗位<Icon type="ios-compose"></Icon></h4>
      <span class="span-label">WEB开发工程师</span>
      <span class="span-label">安卓开发工程师</span>
      <span class="span-label">测试工程师</span>
    </div>

  </div>
</template>
<script>
  export default{
    data () {
      return {
        movieList: [
          {
            name: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            rate: 9.6
          },
          {
            name: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            rate: 9.4
          },
          {
            name: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            rate: 9.5
          },
          {
            name: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            rate: 9.4
          },
          {
            name: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            rate: 9.5
          },
          {
            name: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            rate: 9.2
          },
          {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            rate: 9.4
          },
          {
            name: '海上钢琴师',
            url: 'https://movie.douban.com/subject/1292001/',
            rate: 9.2
          },
          {
            name: '机器人总动员',
            url: 'https://movie.douban.com/subject/2131459/',
            rate: 9.3
          },
          {
            name: '盗梦空间',
            url: 'https://movie.douban.com/subject/3541415/',
            rate: 9.2
          }
        ],
        randomMovieList: []
      }
    },
    methods: {
      changeLimit () {
        function getArrayItems(arr, num) {
          const temp_array = [];
          for (let index in arr) {
            temp_array.push(arr[index]);
          }
          const return_array = [];
          for (let i = 0; i < num; i++) {
            if (temp_array.length > 0) {
              const arrIndex = Math.floor(Math.random() * temp_array.length);
              return_array[i] = temp_array[arrIndex];
              temp_array.splice(arrIndex, 1);
            } else {
              break;
            }
          }
          return return_array;
        }

        this.randomMovieList = getArrayItems(this.movieList, 5);
      }
    },
    mounted () {
      this.changeLimit();
    },
    components: {}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .target-specification {
    .span-label {
      display: inline;
      padding: .2em .6em .3em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: .25em;
    }
  }
</style>
