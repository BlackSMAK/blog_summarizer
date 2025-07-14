import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import { Upload, Link, Type, FileText } from "lucide-react";

const SummarizeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enter an Article URL or paste your Text
            </h2>
          </div>

          <Card className="glass border-border/20 p-8">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted">
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload file
                </TabsTrigger>
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  Add URL
                </TabsTrigger>
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Add text
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-6">
                <div className="border-2 border-dashed border-border/50 rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-muted">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-lg font-medium mb-2">
                        Select or Drop a file
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We support .pdf, .doc, .docx files upto 25 MB
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="url" className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Enter article URL here..."
                    className="h-12 text-lg glass border-border/50"
                  />
                  <p className="text-sm text-muted-foreground">
                    Paste any article URL and we'll extract and summarize it for you.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="text" className="space-y-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Paste your text here..."
                    className="min-h-32 text-lg glass border-border/50 resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    Paste any text content you want to summarize.
                  </p>
                </div>
              </TabsContent>

              <div className="pt-6">
                <Button variant="hero" size="xl" className="w-full">
                  SUMMARIZE THIS
                </Button>
              </div>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SummarizeSection;