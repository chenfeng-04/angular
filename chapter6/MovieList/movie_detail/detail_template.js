<!--电影详情模板-->
<div class="container" style="border: 1px solid slategray;padding: 20px;margin-top: 50px ">
    <div class="row">
        <h1 ng-bind="data.title"></h1>
    </div>
    <div class="row" >
        <div class="col-xs-4">
            <div class="thumbnail">
                <img ng-src="{{data.images.large}}" alt="{{subject.title}}" >
            </div>
        </div>
        <div class="col-xs-8" >
            <article ng-bind="data.summary" style="font-size: larger;"></article>
        </div>
    </div>
    <div class="row">
        <a href="javascript:history.go(-1)" class="btn btn-primary btn-block">返回</a>
    </div>
</div>
