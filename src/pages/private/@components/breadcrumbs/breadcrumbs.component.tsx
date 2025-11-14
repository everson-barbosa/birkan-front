import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb/breadcrumb.component";
import { Link } from "react-router";
import { Fragment } from "react";

interface Breadcrumb {
  readonly text: string;
  readonly link?: string;
}

interface BreadcrumbsProps {
  readonly breadcrumbs: Breadcrumb[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLastBreadcrumb = index === breadcrumbs.length - 1;
          const hasLink = !!breadcrumb?.link;

          return (
            <Fragment key={breadcrumb.text}>
              <BreadcrumbItem className={hasLink ? "hidden md:block" : ""}>
                {hasLink ? (
                  <BreadcrumbLink asChild>
                    <Link to={breadcrumb.link}>{breadcrumb.text}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{breadcrumb.text}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLastBreadcrumb && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/*
<BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Data Fetching</BreadcrumbPage>
        </BreadcrumbItem>
        */
