import os

import dotenv
import mem0

REPOSITORY_ROOT="/Users/vsubbiah/Developer/GitHub/mr-beast-guide"

class Mem0Ingester:

    def __init__(self, memory: mem0.MemoryClient):
        self.memory = memory 

    def ingest_document(
        self,
        filepath: str,
        user_id: str,
        split_character: str = "\n"
    ):
        """Ingest the document into Mem0

        params:
          filepath: the path to the file
        """
        document = ""
        print(filepath)
        with open(filepath, 'r', encoding="utf-8") as f:
            document = "".join(f.readlines())

        chunks = document.split(split_character)

        for chunk in chunks:
            self.memory.add(chunk, user_id=user_id, output_format="v1.1")

if __name__ == "__main__":
    dotenv.load_dotenv(f"{REPOSITORY_ROOT}/src/db_scripts/.env")
    mem0_ingester = Mem0Ingester(mem0.MemoryClient(os.environ.get("MEM0_API_KEY", "")))
    filepath = f"{REPOSITORY_ROOT}/data/guide.txt"
    mem0_ingester.ingest_document(filepath, "default_user")
