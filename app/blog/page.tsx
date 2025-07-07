"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Calendar, User, ArrowRight } from "lucide-react";
import { fetchBlogPosts } from "@/lib/api";
import { BlogPost } from "@/data/mock-data";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetchBlogPosts();
        if (response.success) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-warm py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-6">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Stories & Insights</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Hotel Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover travel tips, wellness insights, culinary adventures, and behind-the-scenes stories 
              from Serene Heaven. Stay inspired for your next luxury getaway.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-luxury">Featured Article</h2>
                <p className="text-muted-foreground">Our latest insights and stories</p>
              </div>
              
              <Card className="overflow-hidden hover:shadow-luxury transition-luxury">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
                      <div className="w-6 h-0.5 bg-luxury" />
                      <span>{featuredPost.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-luxury">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-fit bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="py-24 bg-gradient-warm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-luxury">Recent Articles</h2>
                <p className="text-muted-foreground">Explore more stories and insights</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-luxury transition-luxury group">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-luxury/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-luxury group-hover:text-luxury/80 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" asChild className="w-full border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-luxury">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest articles, travel tips, and exclusive offers 
              directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury"
              />
              <Button className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}