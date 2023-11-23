import Layout from '../layouts/Layout.astro';
import NoContents from '../components/NoContents.astro';
import PostDate from '../components/PostDate.astro';
import PostTags from '../components/PostTags.astro';
import PostTitle from '../components/PostTitle.astro';
import PostFeaturedImage from '../components/PostFeaturedImage.astro';
import PostExcerpt from '../components/PostExcerpt.astro';
import ReadMoreLink from '../components/ReadMoreLink.astro';
import Pagination from '../components/Pagination.astro';
import BlogPostsLink from '../components/BlogPostsLink.astro';
import BlogTagsLink from '../components/BlogTagsLink.astro';
import FeedLink from '../components/FeedLink.astro';
import styles from '../styles/blog.module.css';

<Fragment>
<Layout>
<div slot="main" class={styles.main}>
{posts.length === 0 ? (
<Fragment><NoContents contents={posts} /></Fragment>
) : (
posts.map((post) => (
<Fragment><div class={styles.post} key={post.Slug}>
<PostDate post={post} />
<PostTags post={post} />
<PostTitle post={post} />
<PostFeaturedImage post={post} />
<PostExcerpt post={post} />
<ReadMoreLink post={post} />
</div></Fragment>
))
)}

<footer>
<Pagination currentPage={1} numberOfPages={numberOfPages} />
</footer>
</div>

<div slot="aside" class={styles.aside}>
<BlogPostsLink heading="Recommended" posts={rankedPosts} />
<BlogTagsLink heading="Categories" tags={tags} />
<FeedLink heading="RSS Feed" />
</div>
</Layout>

</Fragment>;
