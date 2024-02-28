
/*
VaporShell provides a minimal framework for starting Igis projects.
Copyright (C) 2021, 2022 CoderMerlin.com
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Vapor
import Fluent
import FluentMySQLDriver

func routes(_ app: Application) throws {
    
    func renderIndex(_ req: Request) async throws -> View {
        return try await req.view.render("index.html")
    }

    app.get("") { req in
        return try await renderIndex(req)
    }

    app.get("classes") { req in
        return try await renderIndex(req)
    }

    app.get("scheduler") { req in
        return try await renderIndex(req)
    }

    app.get("review") { req in
        return try await renderIndex(req)
    }

    app.get("faq") { req in
        return try await renderIndex(req)
    }
    
    app.get("api", "courses") { req async throws in
        return try await Courses.query(on: req.db)
          .all()
    }
}
